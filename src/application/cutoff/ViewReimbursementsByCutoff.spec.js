const ViewReimbursementsByCutoff = require('./ViewReimbursementsByCutoff');

describe('View reimbursements by cutoff id', () => {
  const mockReimbursementRepository = {
    findByCutoffId: jest.fn((id) => id),
  };

  const mockCutoffRepository = {
    findById: jest.fn((id) => id),
  };

  let viewReimbursementsByCutoff;
  beforeAll(() => {
    viewReimbursementsByCutoff = ViewReimbursementsByCutoff({
      cutoffRepository: mockCutoffRepository,
      reimbursementRepository: mockReimbursementRepository,
    });
  });

  test('should return a list of reimbursements', async () => {
    const details = await viewReimbursementsByCutoff('1');
    expect(details).toBeTruthy();
  });
});
