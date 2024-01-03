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
                color: #52525A;
                max-width: 325px;
                box-shadow: 0px 0px 10px 0px rgba(60, 60, 61, 0.1);
                margin: 20px;
                border-radius: 20px;
                padding: 1rem 2rem;
            }
            .header{
                display: flex;
                align-items: flex-end;
                place-content: start;
                gap: 1rem;
            }
            .card:nth-child(odd){
                align-self: flex-end;
            }
            .card:nth-child(even){
                align-self: flex-start;
               
            }
            .card p{
                font-size: 1rem;
               
            }
            .title-card{
                font-size: 1rem;
                color: #18181B;
            }
            .container-stars{
                display: flex;
                place-content: center;
            }
            ::slotted(.img-google){
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            
        `;
    }
    renderStars() {
        let numStars = 5
        let stars = [];
        for (let i = 0; i < numStars; i++) {
            stars = [...stars, {
                id: i + 1,
                fill: "#D4D4D8",
                stroke: "#D4D4D8"
            }]
        }
        const newStars = stars.map((star) => {
            if (this.getAttribute('stars')) {
                let parseNumStars = parseInt(this.getAttribute('stars').trim());
                if (star.id <= parseNumStars) {
                    star.fill = "#F5C044"
                    star.stroke = "#F5C044"
                    return star
                }
            }
            return star
        })
        return newStars;

    }
    render() {
        const stars = this.renderStars()
        this.shadowRoot.innerHTML = /*HTML */ `
           <style>${Card.styles}</style>
           <article class="card">
                <header class="header">
                    <slot name="image-card"></slot>
                    <section class="container-stars">
                    ${stars.map(star => `<jv-start fill="${star.fill}" stroke="${star.stroke}"></jv-start>`).join('')}
                    </section>
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