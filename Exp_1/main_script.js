let neurlist = [];
const neur1 = new Neurone(0, 0, 100, 100, 4, 500, 1);
neurlist.push(neur1);
const neur2 = new Neurone(100, 100, 150, 150, 2, 500, 2);
neurlist.push(neur2);
const neur3 = new Neurone(150, 150, 200, 100, 2, 500, 3);
neurlist.push(neur3);
const neur4 = new Neurone(150, 150, 300, 300, 6, 500, 4);
neurlist.push(neur4);

for (let el of neurlist) {
	el.set_connections(neurlist);
	el.armed = true;
}
