import ChatList from "@/components/ui/ChatList";

type Props = {
    params: {};
    searchParams: {
      error: string;
    };
   };
   function ChatsPage({ searchParams: { error } }: Props) {
    return (
      <div>
        {/*Chat permission chat */}
        {/*Chat list */}
        <ChatList />
      </div>
    );
   }
   
   
   export default ChatsPage;
   