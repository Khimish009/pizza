import { cn } from '@/lib/utils';
import React from 'react';
import { Container } from './container';
import Image from 'next/image';
import { PersonStanding, ShoppingCart, User } from 'lucide-react';
import { Button, Input } from '../ui';

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border border-b', className)}>
        <Container className='flex items-center justify-between py-8 gap-6'>
            <div className='flex items-center gap-4'>
                <Image src="/logo.png" alt="Logo" width={35} height={35} />
                <div>
                    <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
                    <p className="text-sm text-gray-400 leading-3">вкусней уже некуда</p>
                </div>
            </div>
            <div><Input /></div>
            <div className="flex gap-3">
                <Button className='flex items-center gap-1' variant="outline"><User size={16} /> Войти</Button>
                <Button variant="outline"><ShoppingCart /></Button>
            </div>
        </Container>
    </header>
  );
};