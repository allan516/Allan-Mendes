class Component extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    shadow.appendChild(this.build());
    shadow.appendChild(this.style());
  }

  build() {
    const componentRoot = document.createElement("li");
    const picture = document.createElement("picture");
    const source = document.createElement("source");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const a = document.createElement("a");

    h2.innerText = this.getAttribute("projetoh2");
    p.innerText = this.getAttribute("descricaoProjetoP");

    a.href = this.getAttribute("link");
    a.innerText = this.getAttribute("nomeProjetoA");

    source.media = "(min-width: 768px)";
    source.srcset = this.getAttribute("caminhoDaImgG");
    source.type = "image/jpeg";

    img.src = this.getAttribute("caminhoDaImg");
    img.alt = this.getAttribute("descricaoImgAlt");

    picture.appendChild(source);
    picture.appendChild(img);
    p.appendChild(a);

    componentRoot.appendChild(picture);
    componentRoot.appendChild(h2);
    componentRoot.appendChild(p);

    return componentRoot;
  }

  style() {
    const style = document.createElement("style");

    style.textContent = `
    h2 {
    text-align: center;
    }

    p {
    text-align: center;
    }
    a {
    text-decoration: none;
    color: black;
    font-weight: bold;
    }

    img {
    display: block;
    margin: auto;
    }

    hidden {
	margin-bottom: 150px;
	opacity: 0;
	filter: blur(15px);
	transition: all .5s;
	transform: translateX(-100%);
}

.show {
	opacity: 1;
	filter: blur(0);
	transition: all 1.5s;
	transform: translateX(0%);
}
    `;

    return style;
  }
}

customElements.define("shadow-dom", Component);

/*
li -> picture  -> source, img
li -> h2
li -> p -> a


          <li class="hidden">
            <picture>
              <source
                media="(min-width: 768px)"
                srcset="imagens/orkut.jpg"
                type="image/jpg"
              />
              <img src="imagens/orkutP.jpg" alt="projeto orkut" />
            </picture>
            <h2>Projeto Réplica Orkut</h2>
            <p>
              Meu projeto é uma replica do Orkut, a icônica rede social que
              marcou a era da internet nos anos 2000. Esta réplica recria
              fielmente sua aparência.
              <a href="https://allan516.github.io/orkut/"> Ir para página</a>
            </p>
          </li>

*/
