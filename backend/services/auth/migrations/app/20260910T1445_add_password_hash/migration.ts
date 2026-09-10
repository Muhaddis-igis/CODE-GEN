#!/usr/bin/env -S node
import type { Contract as Start } from '../../snapshots/6c7ca99d9b9435177bffde24b9a0d1be5ec48107076ceff3d8070efd51d1f945/contract';
import startContract from '../../snapshots/6c7ca99d9b9435177bffde24b9a0d1be5ec48107076ceff3d8070efd51d1f945/contract.json' with { type: 'json' };
import type { Contract as End } from '../../snapshots/bc56247dfb738dbf79fd071e396ef6f64ee28dbfefb8e64801902b81635abf57/contract';
import endContract from '../../snapshots/bc56247dfb738dbf79fd071e396ef6f64ee28dbfefb8e64801902b81635abf57/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.addColumn({
        schema: 'public',
        table: 'users',
        column: col('passwordHash', 'text', { codecRef: { codecId: 'pg/text@1' } }),
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
