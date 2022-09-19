(function(self) {
    const document = self.document;
    let burger = document.querySelector('#burger');
    let nav = document.querySelector('#mobile-navigation');

    function onTouchStart(event) {
        event.preventDefault();
        [nav, burger].forEach(item => {
            item.classList.toggle("is-active");
        });
    }

    burger.addEventListener('click', onTouchStart);
})(this);