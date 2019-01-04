var Story = require("../models/story");

class StoryDAO{
  constructor(){}

  getAllStories(){
    return [
      new Story({
        id: 0,
        title: "Mama",
        story: "Nice story",
        criteria: "None",
        value: 100,
        estimations: 100,
        status: ":)"
      })
    ];
  }
}

module.exports = StoryDAO;
