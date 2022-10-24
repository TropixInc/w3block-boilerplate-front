import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { SendEmailWhitelist } from '../../api/sendEmail/index';
import CTADiscord from '../CTADiscord/CTADiscord';
import Modal from '../Modal/Modal';
interface ReserveProps {
  className?: string;
}

interface ReserveForm {
  email: string;
  name: string;
}

const schema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('Email inválido').required('Email é obrigatório '),
});

export default function Reserve({ className = '' }: ReserveProps) {
  const [errorSending, setErrorSending] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [modalState, setModalState] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ReserveForm>({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    if (!agreed) {
      setErrorSending('Você precisa estar de acordo para fazer a solicitação');
      return;
    }
    SendEmailWhitelist(data.name, data.email).then((data) => {
      if (!data) {
        setErrorSending('Erro ao enviar sua solicitação');
      } else {
        setModalState(true);
        reset();
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className={`w-full flex justify-center ${className}`}>
        <div className="bg-[#1e9cd6] bg-opacity-40 py-6 px-4 sm:px-10 w-[90%] sm:w-[80%]">
          <p className="text-white text-[22px] text-center font-light">
            Pré Reserva
          </p>
          <p className="text-white font-roboto text-sm text-center mt-4">
            Mergulhe no nosso mar de oportunidades. Solicite a sua pré-reserva
            nesse formulário e tenha uma chance de participar da nossa
            comunidade!
            <br /> Ao me inscrever, eu declaro que quero comprar um token Shark
            pelo valor promocional de $500 (dólares) por $50 (dólares)
          </p>
          <div className="flex flex-col sm:flex-row gap-y-4 gap-x-8 mt-6">
            <div className="flex-1">
              <input
                {...register('name')}
                placeholder="Nome"
                className="w-full px-2 py-4 text-sm font-roboto font-medium outline-none text-[#8f91a0]"
                type="text"
              />
            </div>
            <div className="flex-1">
              <input
                {...register('email')}
                className="w-full px-2 py-4 text-sm font-roboto font-medium outline-none text-[#8f91a0]"
                placeholder="Email"
                type="text"
              />
            </div>

            <button
              type="submit"
              className="text-white bg-[#1e9cd6] py-4 px-[58px] cursor-pointer"
            >
              Seja membro
            </button>
          </div>
          <div className="flex items-start mt-2 gap-x-2">
            <input
              checked={agreed}
              onChange={() => {
                setErrorSending('');
                setAgreed(!agreed);
              }}
              type="checkbox"
              className="mt-1"
            />
            <p className="text-white text-sm font-roboto">
              Declaro que estou ciente das condições acima
            </p>
          </div>
          <p className=" text-red-600  text-sm font-roboto mt-1">
            {errors.name?.message}
          </p>
          <p className=" text-red-600  text-sm font-roboto mt-1">
            {errors.email?.message}
          </p>
          <p className="text-red-600 text-sm font-roboto mt-1">
            {errorSending}
          </p>
        </div>
      </div>
      <Modal onClose={() => setModalState(!modalState)} state={modalState}>
        <p className="text-3xl font-roboto text-center mt-12 text-[#0f3159]">
          Enviado com sucesso!
        </p>
        <p className="font-roboto text-center text-sm px-6 mt-4">
          Seu interesse em mergulhar no nosso mar de oportunidades foi
          registrado pela equipe do PrimeSea!
        </p>
        <p className="font-roboto text-center text-sm px-6 mt-4">
          Entraremos em contato via email cadastrado com mais informações,
          enquanto aguarda acesse nosso Discord.{' '}
        </p>
        <div className="flex justify-center mt-4">
          <div className="w-[190px]">
            <CTADiscord />
          </div>
        </div>
      </Modal>
    </form>
  );
}
