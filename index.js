const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');




















function generateHtml() {

    return `
    <!DOCTYPE html>
    <html lang="en">

        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title> Team Portfolio </title>

        </head>
        
        <body>

            <header class="header"><h1>Our Team </h2> </header>
            <main>
            <div class="card">
              <ul>
                <li>${data.name}</li>
                <li>${data.id}</li>
                <li><a href="mailto:${data.email}">${data.email}</a></li>
                <li>${data.role}</li>
                <li><a>${data.github}</a></li>
                <li></li>
              </ul>
            </div>
            <div class="card" id="engineer">
              <ul>
                <li>${data.name}</li>
                <li>${data.id}</li>
                <li><a href="mailto:${data.email}">${data.email}</a></li>
                <li>${data.role}</li>
                <li><a>${data.github}</a></li>
                <li></li>
              </ul>
            </div>
            <div class="card" id="intern">
              <ul>
                <li>${data.name}</li>
                <li>${data.id}</li>
                <li><a href="mailto:${data.email}">${data.email}</a></li>
                <li>${data.role}</li>
                <li>${data.school}</li>
                <li></li>
              </ul>
            </div>
            <div class="card" id="manager">
              <ul>
                <li>${data.name}</li>
                <li>${data.id}</li>
                <li><a href="mailto:${data.email}">${data.email}</a></li>
                <li>${data.role}</li>
                <li>${data.officenumber}</li>
                <li></li>
              </ul>
            </div>
            </main>
        </body>
    </html>        
    `
}