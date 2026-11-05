jest.mock('../../src/mailer');

const mailer = require('../../src/mailer');
const { validerCommande } = require('../../src/commande');

beforeEach(() => {
  jest.clearAllMocks();
});

test('confirme la commande et retourne le montant', async () => {
  mailer.envoyer.mockResolvedValue();
  const items = [{ prix: 10, qte: 2 }, { prix: 5, qte: 1 }];

  const resultat = await validerCommande(items, 'client@test.fr');

  expect(resultat.montant).toBe(25);
  expect(mailer.envoyer).toHaveBeenCalledTimes(1);
  expect(mailer.envoyer).toHaveBeenCalledWith(
    'client@test.fr',
    expect.stringContaining('25')
  );
});

test('refuse un panier vide sans envoyer de mail', async () => {
  await expect(validerCommande([], 'client@test.fr'))
    .rejects.toThrow('Panier vide');

  expect(mailer.envoyer).not.toHaveBeenCalled();
});