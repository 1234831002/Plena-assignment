import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { createClient, RedisClientType } from 'redis';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
    private client: RedisClientType;

    async onModuleInit() {
        this.client = createClient({
            password: 'DcFelyWVQf1dxKuZBWLhfyH2NZ1Hr4uC',
            socket: {
                host: 'redis-13969.c325.us-east-1-4.ec2.redns.redis-cloud.com',
                port: 13969
            }
        });
        await this.client.connect();
    }

    async onModuleDestroy() {
        await this.client.disconnect();
    }

    async get(key: string): Promise<string | null> {
        return await this.client.get(key);
    }

    async set(key: string, value: string, ttl: number): Promise<void> {
        await this.client.set(key, value, { EX: ttl });
    }

    async del(key: string): Promise<void> {
        await this.client.del(key);
    }
}
