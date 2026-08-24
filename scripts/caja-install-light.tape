# Where should we write the GIF?
Output caja-install-light.gif

# Set up a 1200x600 terminal with 16px font.
Set Theme { "background": "#f6f1e7", "foreground": "#1a1a1a", "cursor": "#e78b09", "black": "#1a1a1a", "red": "#e78b09", "green": "#e78b09", "yellow": "#e78b09", "blue": "#e78b09", "magenta": "#e78b09", "cyan": "#e78b09", "white": "#fdfbf7" }
Set FontSize 16
Set Width 640
Set Height 360

# Require a bit of time before starting
Sleep 1s

# Run the installation command
Type "npm install -g @caja/cli"
Enter

# Wait for installation to complete (adjust time if needed)
Sleep 3s

# Verify installation
Type "caja --version"
Enter

# Wait a few seconds to show the output before ending
Sleep 2s
