'use client';

import * as React from 'react';
import { Check } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface RegistrationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function RegistrationDialog({
  open,
  onOpenChange,
}: RegistrationDialogProps) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [error, setError] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) {
      setTimeout(() => {
        setError('');
        setSubmitted(false);
      }, 200);
    }
    onOpenChange(nextOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName) {
      setError('Por favor, indique o seu nome.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setError('Por favor, introduza um endereço de e-mail válido.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[440px] rounded-[4px] border border-[#E9E5E5] bg-white p-7 ring-0 shadow-lg">
        {submitted ? (
          <div className="py-4 text-left">
            <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#311727] text-white">
              <Check className="h-4 w-4" />
            </div>
            <DialogHeader className="text-left">
              <DialogTitle className="text-[22px] font-semibold tracking-tight text-[#311727]">
                Mensagem enviada
              </DialogTitle>
              <DialogDescription className="mt-2 text-[13px] leading-[1.55] text-[#777777]">
                Obrigada pelo contacto, {name.trim()}. A equipa da Dra. Lucena
                Eduardo responderá brevemente através de{' '}
                <span className="font-medium text-[#080808]">{email.trim()}</span>.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-7 flex justify-end">
              <Button
                type="button"
                onClick={() => handleOpenChange(false)}
                className="h-10 rounded-full bg-[#311727] px-7 text-[12px] font-medium text-white hover:bg-[#311727]/90"
              >
                Fechar
              </Button>
            </div>
          </div>
        ) : (
          <>
            <DialogHeader className="text-left">
              <DialogTitle className="text-[22px] font-semibold tracking-tight text-[#311727]">
                Entrar em contacto
              </DialogTitle>
              <DialogDescription className="mt-1.5 text-[13px] leading-[1.5] text-[#777777]">
                Deixe os seus dados para agendar uma conversa, consultoria
                jurídica, formação ou intervenção institucional.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div className="space-y-1.5">
                <Label
                  htmlFor="reg-name"
                  className="text-[12px] font-medium text-[#080808]"
                >
                  Nome completo
                </Label>
                <Input
                  id="reg-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Maria Silva"
                  className="h-10 rounded-[2px] border-[#E9E5E5] text-[13px] text-[#080808] placeholder:text-[#777777]/60 focus-visible:border-[#311727] focus-visible:ring-0"
                />
              </div>

              <div className="space-y-1.5">
                <Label
                  htmlFor="reg-email"
                  className="text-[12px] font-medium text-[#080808]"
                >
                  E-mail
                </Label>
                <Input
                  id="reg-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="maria@empresa.com"
                  className="h-10 rounded-[2px] border-[#E9E5E5] text-[13px] text-[#080808] placeholder:text-[#777777]/60 focus-visible:border-[#311727] focus-visible:ring-0"
                />
              </div>

              <div className="space-y-1.5">
                <Label
                  htmlFor="reg-company"
                  className="text-[12px] font-medium text-[#080808]"
                >
                  Assunto ou organização
                </Label>
                <Input
                  id="reg-company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Consultoria em RH / Palestra"
                  className="h-10 rounded-[2px] border-[#E9E5E5] text-[13px] text-[#080808] placeholder:text-[#777777]/60 focus-visible:border-[#311727] focus-visible:ring-0"
                />
              </div>

              {error ? (
                <p className="text-[12px] text-[#311727]" role="alert">
                  {error}
                </p>
              ) : null}

              <div className="pt-2 flex items-center justify-between gap-4">
                <span className="text-[11px] text-[#777777]">
                  Resposta em até 24h úteis
                </span>
                <Button
                  type="submit"
                  className="h-10 rounded-full bg-[#311727] px-7 text-[12px] font-medium text-white hover:bg-[#311727]/90"
                >
                  Enviar mensagem
                </Button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
