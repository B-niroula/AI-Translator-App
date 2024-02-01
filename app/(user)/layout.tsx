
export default function ChatsLayout ({
    children,
 }: {
    children: React.ReactNode;
 }) {
    return (
        <div className="flex-l w-full flex flex-col max-w-6xl mx-auto">
            {children}
        </div>
    );
 
 
 }
 
 
 