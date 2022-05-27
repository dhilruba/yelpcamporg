const cities = require("./cities");
const mongoose = require("mongoose");
const { places, descriptors } = require("./seedHelpers");

const Campground = require("../models/campground");

// mongoose.connect('mongodb+srv://dhilruba:Hamdan%4095@cluster0.y75se.mongodb.net/test');
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/yelp-camp");
  console.log("connected");
}

const sample = (array) => array[Math.floor(Math.random() * array.length)];
const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      image: "https://source.unsplash.com/collection/483251",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum repudiandae eligendi esse eos expedita velit quae quasi rem sint culpa.Ratione, tempora maiores doloremque voluptatem porro perspiciatis aspernatur ipsum soluta?",
      price,
    });
    await camp.save();
  }
};

// to close database collection
seedDB();