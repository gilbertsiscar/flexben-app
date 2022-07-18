const ApprovalReimbursement = require('./ApprovalReimbursement');

describe('Approve or reject a reimbursement', () => {
  let mockReimbursementRepository;
  let approvalReimbursement;

  beforeAll(() => {
    mockReimbursementRepository = {
      findById: jest.fn((val) => val),
      updateStatus: jest.fn((val) => val),
    };

    approvalReimbursement = ApprovalReimbursement({
      reimbursementRepository: mockReimbursementRepository,
    });
  });

  test('should approve reimbursement', async () => {
    const reimbursement = await approvalReimbursement('1', 'APPROVED');
    expect(reimbursement).toBeTruthy();
  });
});
