const PubSub = function () {
  const topics = {};

  return {
    subscribe(topic, subscriber) {
      if (!topics[topic]) {
        topics[topic] = [];
      }

      topics[topic].push(subscriber);
    },
    publish(topic, data) {
      if (!topics[topic]) {
        return;
      }

      topics[topic].forEach(subscriber => subscriber(data));
    },
    unsubscribe(topic, subscriber) {
      if (!topics[topic]) {
        return;
      }

      topics[topic] = topics[topic].filter(val => val !== subscriber);
    },
  };
};

const sunscriber1 = (data) => {
  console.log("Subscriber1: received ", data);
};

const sunscriber2 = (data) => {
  console.log("Subscriber2: received ", data);
};

const pubSub = PubSub();
pubSub.subscribe("topic1", sunscriber1);
pubSub.subscribe("topic1", sunscriber2);

pubSub.subscribe("topic2", sunscriber1);


// pubSub.publish('topic1', 'Hello, subscribers!');
pubSub.publish('topic2', 'Hello, subscribers of topic2!');
