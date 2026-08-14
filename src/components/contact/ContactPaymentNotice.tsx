"use client";

export default function ContactPaymentNotice() {
  return (
    <div className="p-8 bg-luxury-card border border-royal-gold/30 flex flex-col gap-4 shadow-xl">
      <div className="flex items-center justify-between border-b border-royal-gold/20 pb-3">
        <h4 className="font-serif text-lg font-bold text-royal-gold">OFFICIAL ADVERTISEMENT PAYMENT NOTICE</h4>
        <span className="px-2.5 py-1 bg-royal-red text-[#F9F5EC] text-[10px] font-sans font-bold uppercase tracking-wider">
          NO CASH POLICY
        </span>
      </div>
      <p className="font-sans text-xs text-cream/80 leading-relaxed font-light">
        We do not accept cash for advertisements. All advertisement payments must be made via NEFT, RTGS, Bank Transfer or Cheque to our official bank account below:
      </p>
      
      <div className="overflow-x-auto text-xs font-sans">
        <table className="w-full border border-royal-gold/20 text-left">
          <tbody>
            <tr className="border-b border-royal-gold/15 bg-luxury-dark/60">
              <td className="p-3 text-royal-gold font-semibold w-1/3">Account Name</td>
              <td className="p-3 text-ivory font-mono">Prime Success</td>
            </tr>
            <tr className="border-b border-royal-gold/15">
              <td className="p-3 text-royal-gold font-semibold">Bank Name</td>
              <td className="p-3 text-ivory font-mono">AU Bank</td>
            </tr>
            <tr className="border-b border-royal-gold/15 bg-luxury-dark/60">
              <td className="p-3 text-royal-gold font-semibold">IFSC Code</td>
              <td className="p-3 text-ivory font-mono">AUBL0002650</td>
            </tr>
            <tr className="border-b border-royal-gold/15">
              <td className="p-3 text-royal-gold font-semibold">Account Number</td>
              <td className="p-3 text-ivory font-mono">2402265055557865</td>
            </tr>
            <tr className="bg-luxury-dark/60">
              <td className="p-3 text-royal-gold font-semibold">Bank Branch</td>
              <td className="p-3 text-ivory font-mono">Prashant Vihar, Delhi</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
