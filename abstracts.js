function setup_abstract(name) {
    const t = document.getElementById(name + "_title");
    if (!t) {
        console.error('missing abstract or title ' + id)
        return
    }
    const a = EZDom.span({className: 'popup', id: name + "_abstract"})
    t.parentNode.insertBefore(a, t.nextSibling)
    fetch_content(a.id, 'abstracts/' + name + '.html')
    t.onmouseenter = (e) => a.style.display = 'block';
    t.onmouseleave = (e) => a.style.display = 'none';
}
function appear(id) {
    document.getElementById(id).style.display = 'block'
}
