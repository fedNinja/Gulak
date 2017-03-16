export default function fetchJSON(url, cb){
	fetch(url)
	.then(res => res.json()) 
	.then(cb);
}