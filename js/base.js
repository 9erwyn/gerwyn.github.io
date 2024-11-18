/* <div id="nav-tagline">Motion</div> */

class mainNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div id="nav">
        <div id="nav-container" class="container">
            <a href="./index.html">Gerwyn Giovanni</a>
                
                <div id="nav-link">
                    <a href="./work.html">Work</a>
                    <a href="#about-me">Contact</a>
                </div>
            </div>
        </div>
			
        `
    }
}

customElements.define('main-nav', mainNav)

class mainFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div id="main-footer" class="flex-between container caption">
            <p>Gerwyn Giovanni</p>
            <div class="flex-between">
                <a href="https://twitter.com/gerwyngiovanni/">Twitter</a>
                <a href="https://instagram.com/gerwyn.giovanni/">Instagram</a>
            </div>
        </div>
        `
    }
}

customElements.define('main-footer', mainFooter)