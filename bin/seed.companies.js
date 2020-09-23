const mongoose = require('mongoose');
const Company = require('../models/company.model');

mongoose.connect(`mongodb+srv://Popinator:1234@cluster0.7ya48.mongodb.net/test`)

const companies = [
    {
        name: "From Software",
        logo: "https://media.fromsoftware.jp/fromsoftware/ww/static/img/common/corp_logo_w.svg",
        description: "FromSoftware, Inc. is a Japanese video game development company founded in November 1986. The company is best known for the Armored Core and Souls series, as well as Bloodborne and Sekiro: Shadows Die Twice.",
        website: "https://www.fromsoftware.jp/ww/",
    },
    {
        name: "Team Ninja",
        logo: "https://upload.wikimedia.org/wikipedia/en/1/11/Team_Ninja.png",
        description: "Team Ninja (Japanese: チームニンジャ) (stylised as Team NINJA) is a Japanese video game developer and a division of Koei Tecmo, founded in 1995 as a part of Tecmo. It was formerly led by Tomonobu Itagaki, later by Yosuke Hayashi, and is best known for the Ninja Gaiden action-adventure game series and the Dead or Alive fighting game series.",
        website: "https://www.koeitecmoamerica.com/teamninja/uk/index.html",
    },
    {
        name: "Deck13 Interactive",
        logo: "https://thumbnails.pcgamingwiki.com/c/c8/Developer_-_Deck13_Interactive_-_logo.png/300px-Developer_-_Deck13_Interactive_-_logo.png",
        description: "Deck13 Interactive is one of Germany’s leading developers with more than 18 years of experience. With over 60 employees located in Frankfurt, Deck13 Interactive has developed upwards of 20 titles, including major releases such as The Surge and Lords of the Fallen. Currently the team is working on The Surge 2 and a new unannounced IP.",
        website: "https://www.deck13.com/",
    },
    {
        name: "Square Enix",
        logo: "https://www.square-enix.com/img/header/logo.jpg",
        description: "The Square Enix Holdings Company, Ltd.[a] is a Japanese video game holding company, best known for its Final Fantasy, Dragon Quest, and Kingdom Hearts role-playing video game franchises, among numerous others. Several of them have sold over 10 million copies worldwide, with the Final Fantasy franchise alone selling 144 million, the Dragon Quest franchise selling 78 million and the Kingdom Hearts franchise selling 30 million. The Square Enix headquarters are in the Shinjuku Eastside Square Building in Shinjuku, Tokyo. Outside of video game publishing and development which the group is more known, Square Enix also is in the business of merchandise, amusement and publication of manga. The company employs some 4600 workers worldwide through its base operations and subsidiaries.",
        website: "https://www.square-enix.com/",
    }
]

Company.create(companies)
    .then(allCompaniesCreated => console.log('A total of', allCompaniesCreated.length, 'companies were created into the DB'))
    .catch(err => console.log('ERROR: ', err))