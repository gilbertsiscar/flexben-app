const FileReimbursement = require('./FileReimbursement');

describe('File a reimbursement', () => {
  let mockReimbursementRepository = {};
  let mockCutoffRepository = {};
  let fileReimbursement;

  beforeAll(() => {
    fileReimbursement = FileReimbursement({
      reimbursementRepository: mockReimbursementRepository,
      cutoffRepository: mockCutoffRepository,
    });
  });

  test('should return inserted id', async () => {
    mockCutoffRepository.findById = jest.fn().mockReturnValue(true);
    mockReimbursementRepository.save = jest
      .fn()
      .mockReturnValue({ insertId: 1 });

    const reimbursement = await fileReimbursement('1', 'APPROVED');
    expect(reimbursement.insertId).toBe(1);
  });
});
