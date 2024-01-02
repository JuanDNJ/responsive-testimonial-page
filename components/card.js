export default class Card extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
    static get styles() {
        return /*CSS*/ `
            :root{
                display: block;
                width: 100%;
                
            }
            .card{
                display: flex;
                flex-direction: column;
                background: #fff;
              
                max-width: 325px;
                box-shadow: 0px 0px 10px 0px rgba(60, 60, 61, 0.1);
                margin: 20px;
                border-radius: 20px;
                padding: 1rem 2rem;
            }
            .card p{
                font-size: 1rem;
            }
            .title-card{
                font-size: 1rem;
                color: #18181B;
            }
            ::slotted(.img-google){
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            
        `;
    }
    render() {
        this.shadowRoot.innerHTML = /*HTML */ `
           <style>${Card.styles}</style>
           <article class="card">
                <header>
                    <slot name="image-card"></slot>
                </header>
                <section>
                    <h2 class="title-card">${this.getAttribute('title')}</h2>
                    <p>
                        ${this.getAttribute('description')}
                    </p>
                </section>
           </article>
        `;
    }
    disconnectedCallback() { }
}
globalThis.customElements.define('jv-card', Card);