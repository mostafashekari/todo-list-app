onmessage = function (e) {
    const filtered = e.data.tasks.filter((task) =>
      task.title.includes(e.data.query)
    );
    postMessage(filtered);
  };
  