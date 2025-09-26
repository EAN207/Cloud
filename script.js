
    const truths = [
      "What’s the most embarrassing thing you’ve ever done?",
      "Who was your first crush?",
      "What’s a secret you’ve never told anyone?",
      "If you had a superpower, what would it be?",
      "What’s the worst lie you’ve ever told?",
      "Which friend do you trust the most?"
    ];

    const dares = [
      "Do 10 jumping jacks right now!",
      "Sing a song loudly for 30 seconds.",
      "Talk in a funny accent until your next turn.",
      "Dance with no music for 15 seconds.",
      "Pretend to be a celebrity for 1 minute.",
      "Post something silly on your social media."
    ];

    function getTruth() {
      const randomTruth = truths[Math.floor(Math.random() * truths.length)];
      document.getElementById("result").innerHTML = "🟡 Truth: " + randomTruth;
    }

    function getDare() {
      const randomDare = dares[Math.floor(Math.random() * dares.length)];
      document.getElementById("result").innerHTML = "🔴 Dare: " + randomDare;
    }