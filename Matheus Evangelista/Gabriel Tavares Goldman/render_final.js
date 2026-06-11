const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

async function main() {

    // Pasta atual do aluno
    const pastaAluno = __dirname;

    // Nome do aluno (nome da pasta atual)
    const aluno = path.basename(pastaAluno);

    // Nome do personal (nome da pasta acima)
    const personal = path.basename(
        path.dirname(pastaAluno)
    );

    // Arquivo HTML parametrizável
    const htmlEntrada = path.join(
        pastaAluno,
        "protocolo.html"
    );

    // Pasta final fora do Git
    const pastaDestino = path.join(
        process.env.USERPROFILE,
        "OneDrive",
        "Área de Trabalho",
        "Protocolos",
        personal
    );

    // Cria a pasta caso não exista
    fs.mkdirSync(
        pastaDestino,
        { recursive: true }
    );

    // Nome final do protocolo
    const arquivoFinal = path.join(
        pastaDestino,
        `${aluno.replace(/\s+/g, "_")}.html`
    );

    console.log(`Gerando protocolo de: ${aluno}`);

    // Abre navegador invisível
    const browser = await chromium.launch({
        headless: true
    });

    const page = await browser.newPage({
        viewport: {
            width: 1600,
            height: 4000
        }
    });

    // Carrega o HTML local
    await page.goto(
        "file:///" + htmlEntrada.replace(/\\/g, "/"),
        {
            waitUntil: "networkidle"
        }
    );

    // Espera os scripts carregarem
    await page.waitForTimeout(3000);

    // Força execução das animações e carregamento das seções
    await page.evaluate(async () => {

        // revela todas as seções
        document
            .querySelectorAll(".reveal")
            .forEach(el => {
                el.classList.add("show");
            });

        // percorre a página inteira
        window.scrollTo(
            0,
            document.body.scrollHeight
        );

    });

    // espera renderização final
    await page.waitForTimeout(2000);

    // pega o HTML já renderizado
    const conteudoFinal = await page.content();

    // salva fora do Git
    fs.writeFileSync(
        arquivoFinal,
        conteudoFinal,
        "utf8"
    );

    await browser.close();

    console.log(`✅ Protocolo salvo em:`);
    console.log(arquivoFinal);
}

main().catch(err => {
    console.error("❌ Erro:");
    console.error(err);
    process.exit(1);
});