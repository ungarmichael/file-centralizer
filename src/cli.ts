import { getFoldersInCurrentDirectory } from "./listFolders";

const { Command } = require("commander");
const figlet = require("figlet");

const program: typeof Command = new Command();

program
	.version("1.0.0")
	.description("CLI for centralizing file from sub dirs to the current dir")
	.option("-l, --ls  [value]", "List directory contents")
	.parse(process.argv);

const options = program.opts();
console.log(figlet.textSync("File Centralizer"));

if (options.ls) {
	const filepath = typeof options.ls === "string" ? options.ls : process.cwd();
	console.log(process.cwd());
	console.log(getFoldersInCurrentDirectory(filepath));
}
