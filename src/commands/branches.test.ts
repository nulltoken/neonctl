import { describe } from '@jest/globals';

import { testCliCommand } from '../test_utils.js';

describe('branches', () => {
  testCliCommand({
    name: 'list',
    args: ['branches', 'list', '--project.id', 'test'],
    expected: {
      snapshot: true,
    },
  });

  testCliCommand({
    name: 'create with endpoint',
    args: [
      'branches',
      'create',
      '--project.id',
      'test',
      '--branch.name',
      'test_branch',
      '--endpoint.type',
      'read_only',
    ],
    expected: {
      snapshot: true,
    },
  });

  testCliCommand({
    name: 'create without endpoint',
    args: [
      'branches',
      'create',
      '--project.id',
      'test',
      '--branch.name',
      'test_branch',
    ],
    expected: {
      snapshot: true,
    },
  });

  testCliCommand({
    name: 'delete',
    args: [
      'branches',
      'delete',
      '--project.id',
      'test',
      '--branch.id',
      'test_branch_id',
    ],
    expected: {
      snapshot: true,
    },
  });

  testCliCommand({
    name: 'update',
    args: [
      'branches',
      'update',
      '--project.id',
      'test',
      '--branch.id',
      'test_branch_id',
      '--branch.name',
      'new_test_branch',
    ],
    expected: {
      snapshot: true,
    },
  });

  testCliCommand({
    name: 'get',
    args: [
      'branches',
      'get',
      '--project.id',
      'test',
      '--branch.id',
      'test_branch_id',
    ],
    expected: {
      snapshot: true,
    },
  });
});
