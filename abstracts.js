function setup_abstract(title, id, url) {
    const a = document.getElementById(id),
            t = document.getElementById(title);
    if (!a || !t) {
        console.error('missing abstract or title ' + id)
        return
    }
    fetch_content(id, url)
    t.onmouseenter = (e) => a.style.display = 'block';
    t.onmouseleave = (e) => a.style.display = 'none';
}
function appear(id) {
    document.getElementById(id).style.display = 'block'
}
