import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EventserviceService {
  arrEvent = [
    {
      tanggalEvent: new Date(2024, 8, 5, 10),
      namaEvent: "Regional Qualifier - Valorant",
      namaGame: "Valorant",
      team: "Team A",
      gambarEvent: "assets/img/valorant_regional.png",
      lokasiEvent: "Los Angeles, CA",
      deskripsiEvent: "This high-stakes event will bring together top team from accross the region, all competing for a chance" +
        " to advance to the national finals. Expect intense gameplay, strategic plays, and thrilling moments as teams battle it out" +
        " in one of the most popular first-person shooters. Fans can anticipate an action-packed day filled with memorable highlights" +
        " and fierce competition in the heart of the esports scene.",
    },
    {
      tanggalEvent: new Date(2024, 8, 10, 23),
      namaEvent: "Mobile Legends: Bang Bang Development League (MDL)",
      namaGame: "Mobile Legend",
      team: "Team C",
      gambarEvent: "assets/img/mdl.jpeg",
      lokasiEvent: "Shooting Gallery Studios, Jakarta, Indonesia",
      deskripsiEvent: "The Mobile Legends: Bang Bang Development League (MDL) serves as a grassroots esports platform aimed at developing " +
        "and showcasing emerging talent in the Mobile Legends community. The league is organized across different regions, with events held " +
        "in the Philippines, Indonesia, and other countries to nurture players who aspire to join the professional Mobile Legends: Bang Bang " +
        "Professional League (MPL).",
    },
    {
      tanggalEvent: new Date(2024, 9, 7, 11),
      namaEvent: "Valorant Livestream",
      namaGame: "Valorant",
      team: "Team A",
      gambarEvent: "assets/img/valorant_live.jpg",
      lokasiEvent: "Streaming on Twitch and YouTube",
      deskripsiEvent: "Join us for an exciting Valorant livestream event! Watch as top players showcase their skills, strategies, and " +
        "teamwork in intense matches. Whether you’re a fan of the game or new to the world of Valorant, this livestream is perfect for " +
        "anyone interested in fast-paced, tactical gameplay. Engage with other viewers, cheer for your favorite team, and get a chance to " +
        "learn tips and tricks from the best players. Don’t miss this action-packed event full of thrilling plays and heart-pounding moments!",
    },
    {
      tanggalEvent: new Date(2024, 10, 11, 10),
      namaEvent: "Valorant External Tournament",
      namaGame: "Valorant",
      team: "Team B",
      gambarEvent: "assets/img/valorant_tourney.png",
      lokasiEvent: "Tunjungan Plaza Mall, Surabaya, Indonesia",
      deskripsiEvent: "Get ready for an epic showdown at the Valorant External Tournament! This tournament brings together talented teams " +
        "from around the world, competing for glory and fantastic prizes. Watch as players demonstrate high-level tactics, incredible aim, " +
        "and outstanding teamwork in a series of thrilling matches. Whether you’re a hardcore Valorant fan or just enjoy esports, this is an " +
        "event you won’t want to miss. Join us live to support your favorite team, interact with the community, and witness unforgettable plays!",
    },
    {
      tanggalEvent: new Date(2024, 11, 4, 10),
      namaEvent: "Mobile Legends: Bang Bang Professional League (MPL)",
      namaGame: "Mobile Legend",
      team: "Team A",
      gambarEvent: "assets/img/mpl.jpeg",
      lokasiEvent: "Eldorado Dome, Bandung, Indonesia",
      deskripsiEvent: "The Mobile Legends: Bang Bang Professional League (MPL) is a premier esports tournament organized by Moonton Games, " +
        "featuring some of the top professional teams across various regions. MPL tournaments take place in regions like the Philippines, " +
        "Indonesia, Malaysia, and others, each offering teams a path to qualify for international events like the MLBB Southeast Asia Cup " +
        "(MSC) and the World Championships.",
    },
  ]

  constructor() { }
}
