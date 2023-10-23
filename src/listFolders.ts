import fs from "fs";

export function getFoldersInCurrentDirectory(directoryPath: string): string[] {
	try {
		// Read the contents of the current directory
		const items = fs.readdirSync(directoryPath);

		// Filter out folders (directories) from the list
		const folders = items.filter((item) => {
			const itemPath = `${directoryPath}/${item}`;
			return fs.statSync(itemPath).isDirectory();
		});

		return folders;
	} catch (error) {
		console.error("An error occurred:", error);
		return [];
	}
}
