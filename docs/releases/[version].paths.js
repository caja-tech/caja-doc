export default {
  async paths() {
    try {
      const res = await fetch('https://api.github.com/repos/caja-tech/caja-cli/releases', {
        headers: {
          'Accept': 'application/vnd.github.html+json',
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
      if (!res.ok) return []
      const releases = await res.json()

      return releases.map(r => ({
        params: { 
          version: r.tag_name,
          name: r.name || r.tag_name,
          date: new Date(r.published_at).toLocaleDateString(),
          html: r.body_html
        }
      }))
    } catch (e) {
      console.error('Failed to fetch releases for paths:', e)
      return []
    }
  }
}
