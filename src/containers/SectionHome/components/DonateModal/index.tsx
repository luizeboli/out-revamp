import React, { useEffect, useState } from 'react';
import Rodal from 'rodal';

import PaypalButtonGif from '@assets/siteImages/btn-donate.gif';
import { Button } from '@components/Button/styles';

import * as S from './styles';

import 'rodal/lib/rodal.css';

const DonateModal = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [visible]);

  const toggleModalVisible = () => setVisible((prevValue) => !prevValue);

  return (
    <>
      <Button
        onClick={() => toggleModalVisible()}
        size="medium"
        uppercase
        color="secondary"
      >
        Vem doar!
      </Button>
      <S.Container>
        <Rodal
          visible={visible}
          onClose={() => toggleModalVisible()}
          customStyles={{
            maxWidth: '600px',
            width: '95%',
            height: 'fit-content',
          }}
        >
          <S.ModalContent>
            <h4>Faça a sua doação!</h4>
            <p>
              Os valores aqui doados são todos destinados aos eventos,
              atividades e manutenções institucionais da ONG.
            </p>
            <p>
              Sua colaboração é valiosa demais! O bem que você fará, alguém
              receberá, e este bem nunca irá parar de circular no mundo!
            </p>
            <p>
              <b>#SejaOut</b>
            </p>

            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_blank"
              style={{ marginBottom: '0 !important', textAlign: 'center' }}
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="AGHFMR4K3H8RW"
              />
              <input
                type="image"
                src={PaypalButtonGif}
                name="submit"
                title="PayPal - The safer, easier way to pay online!"
                alt="Faça doações com o botão do PayPal"
              />
            </form>
          </S.ModalContent>
        </Rodal>
      </S.Container>
    </>
  );
};

export default DonateModal;
