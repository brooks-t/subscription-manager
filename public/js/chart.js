fetch('/api/subscriptions/chart', {
  method: 'GET',
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("CHART API RESPONSE: ", data);
    console.log("WHAT IS THIS? ", data.subscriptions[0].category)
    var bookData = 0;
    var eduData = 0;
    var foodData = 0;
    var healthData = 0;
    var musicData = 0;
    var newsData = 0;
    var petData = 0;
    var shopData = 0;
    var videoData = 0;
    var otherData = 0;
    var totalData = 0;
    for (i = 0; i < data.subscriptions.length; i++) {
      if (data.subscriptions[i].category === "Books") {
        bookData += data.subscriptions[i].amount
        totalData += data.subscriptions[i].amount
      }
      else if (data.subscriptions[i].category === "Education") {
        eduData += data.subscriptions[i].amount
        totalData += data.subscriptions[i].amount
      }
      else if (data.subscriptions[i].category === "Food/Grocery") {
        foodData += data.subscriptions[i].amount
        totalData += data.subscriptions[i].amount
      }
      else if (data.subscriptions[i].category === "Health/Fitness") {
        healthData += data.subscriptions[i].amount
        totalData += data.subscriptions[i].amount
      }
      else if (data.subscriptions[i].category === "Music/Audio") {
        musicData += data.subscriptions[i].amount
        totalData += data.subscriptions[i].amount
      }
      else if (data.subscriptions[i].category === "News") {
        newsData += data.subscriptions[i].amount
        totalData += data.subscriptions[i].amount
      }
      else if (data.subscriptions[i].category === "Pets") {
        petData += data.subscriptions[i].amount
        totalData += data.subscriptions[i].amount
      }
      else if (data.subscriptions[i].category === "Shopping") {
        shopData += data.subscriptions[i].amount
        totalData += data.subscriptions[i].amount
      }
      else if (data.subscriptions[i].category === "Video") {
        videoData += data.subscriptions[i].amount
        totalData += data.subscriptions[i].amount
      }
      else {
        otherData += data.subscriptions[i].amount
        totalData += data.subscriptions[i].amount
      }
    }
    
    const bookChart = bookData;
    const eduChart = eduData;
    const foodChart = foodData;
    const healthChart = healthData;
    const musicChart = musicData;
    const newsChart = newsData;
    const petChart = petData;
    const shopChart = shopData;
    const videoChart = videoData;
    const otherChart = otherData;
    const totalChart = totalData;

    let ctx = document.getElementById("myChart");

    let myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Books",
          "Education",
          "Food/Grocery",
          "Health/Fitness",
          "Music/Audio",
          "News",
          "Pets",
          "Shopping",
          "Video",
          "Other"
        ],
        datasets: [
          {
            label: `Total Spending: $ ${totalChart}`,
            data: [bookChart, eduChart, foodChart, healthChart, musicChart, newsChart, petChart, shopChart, videoChart, otherChart],
            backgroundColor: [
              "rgba(255, 99, 132, 0.5)",
              "rgba(54, 162, 235, 0.5)",
              "rgba(255, 206, 86, 0.5)",
              "rgba(75, 192, 192, 0.5)",
              "rgba(153, 102, 255, 0.5)",
              "rgba(255, 159, 64, 0.5)",
              "rgba(149, 235, 52, 0.5)",
              "rgba(235, 52, 52, 0.5)",
              "rgba(235, 52, 192, 0.5)",
              "rgba(52, 235, 143, 0.5)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(149, 235, 52, 1)",
              "rgba(235, 52, 52, 1)",
              "rgba(235, 52, 192, 1)",
              "rgba(52, 235, 143, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  })
