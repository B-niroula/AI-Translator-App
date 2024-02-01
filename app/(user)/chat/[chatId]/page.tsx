import { authOptions } from "@/auth";
import AdminControls from "@/components/ui/AdminControls";
import ChatInput from "@/components/ui/ChatInput";
import ChatMembersBadges from "@/components/ui/ChatMembersBadges";
import ChatMessages from "@/components/ui/ChatMessages";
import { sortedMessagesRef } from "@/lib/converters/Message";
import { getDocs } from "firebase/firestore";
import { getServerSession } from "next-auth";

type Props = {
  params: {
    chatId: string;
  };
};

async function chatPage({params: {chatId} }: Props) {
  const session = await getServerSession(authOptions);

  const initialMessages = (await getDocs(sortedMessagesRef(chatId))).docs.map(
    (doc) => doc.data()
  );


  return (
    <>
      {/*Admin control */}
      <AdminControls chatId={chatId} />
      {/*Chat members Badge */}
      <ChatMembersBadges chatId={chatId}/>
      {/*Chat messages */}
      <div className="flex-1">
        <ChatMessages
          chatId={chatId}
          session={session}
          initialMessages={initialMessages}
        />
      </div>

      {/*Chat Input*/}
      <ChatInput chatId={chatId} />
    </>
  );
}

export default chatPage;
