---
title: E-Commerce Rules Engine
---
# E-Commerce Domain Logic: Configurable Rules Engine

One of the most powerful paradigms in Cajá is the use of **Closures** and **Higher-Order Functions (HOFs)** to create domain-specific function factories. 

In this e-commerce example, we dynamically generate business rules—like category filters, price thresholds, and discount appliers—by passing configuration data into a factory function. The returned functions "remember" this configuration (partial application) and can be reused instantly in data pipelines. Notice how the `make_discount_applier` calculates the discount multiplier *only once* when the rule is created, drastically improving performance over a massive product catalog.

This approach turns a complex sequence of operations into a highly readable, declarative pipeline that reads exactly like a business requirement.

```caja
import array
import "@caja/query"

type Product struct {
    name String
    category String
    price Number
}

# ============================================================================
# The True Power of Closures: Configurable Factories and Partial Application
# ============================================================================
# Closures allow us to inject configuration into a function once,
# and reuse the resulting specialized function many times.

# 1. A factory for creating category filters.
# The target category is captured in the closure.
let make_category_filter = fn(target_category: String) -> fn(Product) -> Boolean {
    return fn(p: Product) -> Boolean {
        return p.category == target_category
    }
}

# 2. A factory for creating discount appliers.
# The true power here: we calculate the `multiplier` ONLY ONCE when the closure
# is created. The inner function remembers `multiplier` without needing to
# recalculate `1 - (discount_percent / 100)` for every single product!
let make_discount_applier = fn(discount_percent: Number) -> fn(Product) -> Product {
    let multiplier = 1 - (discount_percent / 100) 

    return fn(p: Product) -> Product {
        return Product {
            name: p.name,
            category: p.category,
            price: p.price * multiplier
        }
    }
}

# 3. A factory for price thresholds.
let make_price_threshold_filter = fn(min_price: Number) -> fn(Product) -> Boolean {
    return fn(p: Product) -> Boolean {
        return p.price >= min_price
    }
}

# ============================================================================
# Instantiating our domain-specific functions
# ============================================================================
# By using closures, we avoid writing repetitive functions like `is_electronics`,
# `is_furniture`, `apply_10_percent_discount`, etc.
# We just configure them!

let is_electronics = make_category_filter("Electronics")
let apply_black_friday_discount = make_discount_applier(30) # 30% off
let is_expensive = make_price_threshold_filter(500.00)

let catalog: [Product] = [
    Product { name: "Laptop", category: "Electronics", price: 1200.00 },
    Product { name: "Mouse", category: "Electronics", price: 25.00 },
    Product { name: "Desk", category: "Furniture", price: 300.00 },
    Product { name: "Smartphone", category: "Electronics", price: 800.00 }
]

# ============================================================================
# Expressive Pipelines
# ============================================================================
# Our configured closures make the pipeline read exactly like business rules.
let premium_discounted_electronics = catalog
    |> query.filter(is_electronics)
    |> query.filter(is_expensive)
    |> query.map(apply_black_friday_discount)

return premium_discounted_electronics
```
