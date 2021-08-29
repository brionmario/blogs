/**
 * MIT License
 *
 * Copyright (c) 2021 Brion Mario

 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import * as fs from "fs-extra";
import * as path from "path";
import { Command, flags } from "@oclif/command";
import * as inquirer from "inquirer";

export default class Generateblog extends Command {

    static description = "Generates a folder to contain resources for a blog.";

    static flags = {
        help: flags.help({ char: "h" }),
        // flag with a value (-n, --name=VALUE)
        name: flags.string({ char: "n", description: "name to print" }),
        // flag with no value (-f, --force)
        force: flags.boolean({ char: "f" }),
    };

    static args = [ { name: "file" } ];

    async run() {

        // const { args, flags } = this.parse(Generateblog);

        // Prompt for Blog Type
        const responses: {
            blogType: string;
            blogTitle: string;
            blogResources: string;
            blogSource: string;
        } = await inquirer.prompt([
            {
                name: "blogType",
                message: "What is the type of the blog that you are adding?",
                type: "list",
                choices: [ { name: "technical" } ],
            },
            {
                name: "shouldCreateContainerDirectory",
                message: "The directory to store the type of blog you selected doesn't exist. " +
                    "Would you like to create a new directory?",
                type: "confirm",
                when: answers => {
                    const target = path.join(process.cwd(), answers.blogType);
                    return !fs.existsSync(target);
                }
            },
            {
                name: "blogTitle",
                message: "What is the title of the blog?",
                type: "input",
                validate: answer => {
                    if (!answer) {
                        this.error("Blog Title is required!");
                    }

                    return true;
                }
            },
            {
                name: "blogResources",
                message: "Will there be resource (images, mockups etc.)?",
                type: "confirm"
            },
            {
                name: "blogSource",
                message: "Will there be source code?",
                type: "confirm"
            }
        ]);


        this.log(`You entered: ${responses}`)
    }
}
