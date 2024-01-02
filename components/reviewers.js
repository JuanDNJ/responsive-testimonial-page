export default class Reviewers extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
    }
    connectedCallback() {
        this.render()
    }
    static get styles() {
        return /*CSS*/ `
            :host{
                display: flex;
                color: #52525A;
            }
            .reviewers{
                display: flex;
                flex-direction: column;
                place-content: center;
                padding: 0 2rem;
             
              
            }
            .reviewers .img-review{
                display: flex;
                place-items: center;
                padding: 1rem 0;
            }
            .reviewers footer section{
                display: flex;
                flex-direction: column;
                gap: .5rem;
            }
            img{
                width:100%;
                height: 100%;
                object-fit: cover;
            }
           
            
            ::slotted(.title){
                font-size: 2.25rem;
                font-family: 'Sora', sans-serif;
                color: #18181B;
            }
            ::slotted(.paragraf){
                font-size: 1.25rem;
                line-height: 2rem;
            }
            ::slotted(.container-icons){
                display: flex;
                flex-direction: column;
                gap: .25rem;
            }
        `;
    }
    render() {
        this.shadowRoot.innerHTML = /*HTML*/ `
            <style>${Reviewers.styles}</style>
            <article class="reviewers">
                <header class="img-review">
                    <slot name="star-image">Default Image</slot>
                </header>
                <section>
                    <slot name="title"></slot>
                    <slot name="description"></slot>
                </section>
                <footer>
                    <section>
                        <slot name="icons"></slot>
                    </section>
                </footer>
            </article>
        `;
    }
    disconnectedCallback() { }
}
globalThis.customElements.define("jv-reviewers", Reviewers);