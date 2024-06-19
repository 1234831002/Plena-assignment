import { createClient } from 'redis';

const client = createClient({
    password: 'DcFelyWVQf1dxKuZBWLhfyH2NZ1Hr4uC',
    socket: {
        host: 'redis-13969.c325.us-east-1-4.ec2.redns.redis-cloud.com',
        port: 13969
    }
});
export default client