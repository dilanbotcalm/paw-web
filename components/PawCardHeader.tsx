import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ClipboardCheck, Files, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PawCardHeader = (props) => {
  const [showCopiedIcon, setShowCopiedIcon] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let originalString = 'c5dd646c68d4180f0d12bdef38316c1e2ddd25e5aJBQImDR1Es291';
  let resultString = originalString.substring(0, 7) + '...' + originalString.substring(originalString.length - 5);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(originalString).then(() => {
      setShowCopiedIcon(true);
      setTimeout(() => setShowCopiedIcon(false), 2000); // Hide the icon after 2 seconds
      console.log('Text copied to clipboard');
    }).catch((err) => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <div className='bg-[#12091C] xl:px-8 px-2 py-4 flex flex-row rounded-2xl items-center justify-between'>
      <Dialog>
        <DialogTrigger asChild>
          <button className='md:hidden'>
            <Menu className='text-white cursor-pointer' size={24} onClick={() => setIsMenuOpen(true)} />
          </button>
        </DialogTrigger>
        <DialogContent isOpen={isMenuOpen} onDismiss={() => setIsMenuOpen(false)} className='bg-[#12091C] p-4 rounded-lg'>
          <div className='flex flex-col space-y-4'>
            <Button onClick={() => console.log('Home')} className='cursor-pointer'>Home</Button>
            <Button onClick={() => console.log('All Validators')} className='cursor-pointer'>All Validators</Button>
            <Button onClick={() => console.log('My Account')} className='cursor-pointer'>My Account</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Desktop navigation items */}
      <div className='hidden md:flex flex-row items-center space-x-4 cursor-pointer'>
        <span onClick={() => console.log('Home')} className='text-white text-[13px] hover:text-[#1766AA]'>Home</span>
        <span onClick={() => console.log('All Validators')} className='text-white text-[13px] hover:text-[#1766AA]'>All Validators</span>
        <span onClick={() => console.log('My Account')} className='text-white text-[13px] hover:text-[#1766AA]'>My Account</span>
      </div>

      {/* Wallet address and copy icon */}
      <div className='flex-grow flex justify-center items-center'>
        <div className='rounded-full py-2 px-3 sm:px-5 bg-[#0B1A40] flex flex-row items-center space-x-2 cursor-pointer'>
          <p className='text-white text-sm sm:text-base'>{resultString}</p>
          {showCopiedIcon ? (
            <ClipboardCheck className='text-gray-200 hover:text-gray-400' size={20} />
          ) : (
            <Files className='text-gray-200 hover:text-gray-400' size={20} onClick={copyToClipboard} />
          )}
        </div>
      </div>

      {/* Disconnect wallet button */}
      <Button className='bg-[#1467AB] hover:bg-[#1766AA] rounded-full cursor-pointer'>
        Disconnect Wallet
      </Button>
    </div>
  );
};

export default PawCardHeader;
