import React from 'react';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';

import './CardModal.css';

export default function CardModal(props) {
    const { modalOpen, setModalOpen, card } = props

    return (
            <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                className="modal-container"
            >
                <Fade in={modalOpen}>
                    <div className="modal-content">
                        <img className="modal-card-img" src={card.imageUrlHiRes} alt=""/>
                        <p><strong>Name: </strong> {card.name}</p>
                        <p><strong>Rarity: </strong> {card.rarity}</p>
                        <p><strong>Set: </strong> {card.set}</p>
                        <p><strong>Series: </strong> {card.series}</p>
                        <p><strong>Type: </strong> {card.types}</p>

                    </div>
                </Fade>
            </Modal>
    )
}