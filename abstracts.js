function setup_abstract(name) {
    const title = name + "_title"
    const t = document.getElementById(title);
    const a = EZDom.span({className: 'popup', id: name + "_abstract"})
    t.parentNode.insertBefore(a, t.nextSibling)
    if (!a || !t) {
        console.error('missing abstract or title ' + id)
        return
    }
    fetch_content(a.id, 'abstracts/' + name + '.html')
    t.onmouseenter = (e) => a.style.display = 'block';
    t.onmouseleave = (e) => a.style.display = 'none';
}
function appear(id) {
    document.getElementById(id).style.display = 'block'
}
