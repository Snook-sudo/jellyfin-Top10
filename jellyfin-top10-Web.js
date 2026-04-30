(function () {

    if (window.innerWidth < 900) return; // ❌ blocca mobile + tablet

    const CLASS = 'jf-top-rank';

    const applyStyle = (el) => {

        el.style.fontFamily = 'Arial Black, Impact, sans-serif';
        el.style.fontWeight = '900';

        el.style.color = 'transparent';
        el.style.webkitTextStroke = '3px rgba(255,255,255,0.9)';
        el.style.textShadow = '0 0 12px rgba(0,0,0,0.6)';

        el.style.display = 'flex';
        el.style.alignItems = 'center';
        el.style.justifyContent = 'center';

        el.style.pointerEvents = 'none';
        el.style.flexShrink = '0';

        el.style.transform = 'translateX(6px)';
    };

    const wrapCard = (card) => {

        if (card.parentElement && card.parentElement.classList.contains('jf-rank-wrap')) {
            return card.parentElement;
        }

        const wrap = document.createElement('div');
        wrap.className = 'jf-rank-wrap';

        wrap.style.display = 'flex';
        wrap.style.alignItems = 'center';
        wrap.style.gap = '14px';

        card.parentNode.insertBefore(wrap, card);
        wrap.appendChild(card);

        card.style.flex = '0 0 auto';

        return wrap;
    };

    const apply = () => {

        const section = document.querySelector('.verticalSection.Top');
        if (!section) return;

        const cards = section.querySelectorAll('.card');
        if (!cards.length) return;

        let rank = 1;

        cards.forEach(card => {

            if (rank > 10) return;

            const wrap = wrapCard(card);

            let el = wrap.querySelector('.' + CLASS);

            if (!el) {
                el = document.createElement('div');
                el.className = CLASS;
                wrap.insertBefore(el, card);
            }

            el.textContent = String(rank);

            applyStyle(el);

            el.style.height = card.offsetHeight + 'px';
            el.style.width = '80px';
            el.style.fontSize = (card.offsetHeight * 0.8) + 'px';

            card.style.marginRight = '95px';

            rank++;
        });
    };

    let lastCount = 0;

    const tick = () => {
        const section = document.querySelector('.verticalSection.Top');
        const count = section ? section.querySelectorAll('.card').length : 0;

        if (count !== lastCount) {
            lastCount = count;
            apply();
        }
    };

    setInterval(tick, 1000);

    window.addEventListener('resize', apply);
    window.addEventListener('focus', () => setTimeout(apply, 300));
    window.addEventListener('pageshow', () => setTimeout(apply, 300));

    setTimeout(apply, 600);

})();
