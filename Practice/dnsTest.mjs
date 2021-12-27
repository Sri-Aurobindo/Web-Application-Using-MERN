import dns from 'dns';
const { Resolver } = dns.promises;
const resolver = new Resolver();
// Make various method calls with the resolver object
// as shown below.

let servers = resolver.getServers();
console.log("DNS Servers:");
console.log(servers);

resolver.resolve4('10minutemail.com').then((addresses) => {
    console.log('Address for DrBsClasses.org')
    console.log(addresses);
});