import com.google.cloud.vertexai.VertexAI;
import com.google.cloud.vertexai.api.GenerateContentResponse;
import com.google.cloud.vertexai.generativeai.ChatSession;
import com.google.cloud.vertexai.generativeai.GenerativeModel;
import com.google.cloud.vertexai.generativeai.ResponseHandler;
import com.google.cloud.vertexai.api.Content;
import com.google.cloud.vertexai.api.Part;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ChatBotLocal {

    public static void main(String[] args) throws IOException {
        String projectId = "collabothon2024-439013";
        String location = "europe-west3";
        String modelName = "gemini-1.5-pro";
        chatDiscussion(projectId, location, modelName);
    }

    public static void chatDiscussion(String projectId, String location, String modelName) throws IOException {
        try (VertexAI vertexAI = new VertexAI(projectId, location)) {
            GenerativeModel model = new GenerativeModel(modelName, vertexAI);
            ChatSession chatSession = model.startChat();

            String context = "# 1. Basic Savings Account\n" +
                    "\n" +
                    "## Długi opis\n" +
                    "Basic Savings to wysokooprocentowane konto oszczędnościowe zaprojektowane dla klientów o średnich dochodach. Oferuje atrakcyjną stopę procentową 1,5%, co pozwala na efektywne pomnażanie oszczędności przy stosunkowo niskim ryzyku. Konto wymaga utrzymania minimalnego salda w wysokości 500,00 zł, co zachęca do regularnego oszczędzania i budowania stabilnej bazy finansowej. \n" +
                    "\n" +
                    "Basic Savings jest idealnym rozwiązaniem dla osób, które chcą bezpiecznie gromadzić środki na przyszłość, jednocześnie czerpiąc korzyści z wyższego oprocentowania niż standardowe konta oszczędnościowe. Produkt ten jest szczególnie atrakcyjny dla młodych profesjonalistów, rodzin budujących oszczędności na przyszłość dzieci, lub osób planujących większe wydatki w średnim terminie.\n" +
                    "\n" +
                    "## Plusy\n" +
                    "- Wysoka stopa procentowa (1,5%) w porównaniu do standardowych kont oszczędnościowych\n" +
                    "- Niskie wymagane saldo minimalne (500,00 zł), co czyni produkt dostępnym dla szerokiego grona klientów\n" +
                    "- Bezpieczeństwo środków gwarantowane przez bank\n" +
                    "- Łatwy dostęp do środków w razie potrzeby\n" +
                    "- Możliwość automatyzacji wpłat, co wspiera budowanie nawyku oszczędzania\n" +
                    "\n" +
                    "## Minusy\n" +
                    "- Wymóg utrzymania minimalnego salda może być trudny dla niektórych klientów w okresach finansowych trudności\n" +
                    "- Oprocentowanie, choć atrakcyjne, może nie nadążać za inflacją w okresach wysokiego wzrostu cen\n" +
                    "- Ograniczenia dotyczące liczby wypłat miesięcznie mogą być niewygodne dla niektórych użytkowników\n" +
                    "- Brak dodatkowych funkcji inwestycyjnych dla klientów poszukujących wyższych zwrotów\n" +
                    "\n" +
                    "# 2. Car Loan\n" +
                    "\n" +
                    "## Długi opis\n" +
                    "Car Loan to przystępna pożyczka samochodowa zaprojektowana z myślą o klientach o niższych dochodach, umożliwiająca zakup wymarzonego pojazdu. Oferta obejmuje pożyczkę w wysokości 20 000,00 zł z konkurencyjnym oprocentowaniem 4,0% w skali roku, rozłożoną na 60 miesięcy (5 lat). \n" +
                    "\n" +
                    "Ten produkt finansowy ma na celu ułatwienie dostępu do finansowania zakupu samochodu osobom, które mogą mieć trudności z uzyskaniem tradycyjnych kredytów bankowych ze względu na niższe dochody. Car Loan oferuje elastyczne warunki spłaty, co pozwala na dopasowanie miesięcznych rat do możliwości finansowych pożyczkobiorcy.\n" +
                    "\n" +
                    "Pożyczka ta jest idealna dla osób potrzebujących samochodu do pracy, młodych rodzin poszukujących pierwszego rodzinnego auta, lub osób chcących wymienić stary pojazd na nowszy model bez nadmiernego obciążania domowego budżetu.\n" +
                    "\n" +
                    "## Plusy\n" +
                    "- Dostępność dla osób o niskich dochodach, często wykluczonych z tradycyjnych opcji finansowania\n" +
                    "- Konkurencyjne oprocentowanie (4,0%) w porównaniu do innych pożyczek dla osób o niższych dochodach\n" +
                    "- Długi okres spłaty (60 miesięcy) pozwalający na niższe miesięczne raty\n" +
                    "- Brak ukrytych opłat, przejrzyste warunki umowy\n" +
                    "- Możliwość wcześniejszej spłaty bez dodatkowych kosztów\n" +
                    "\n" +
                    "## Minusy\n" +
                    "- Ograniczona kwota pożyczki (20 000,00 zł) może nie wystarczyć na zakup nowszych lub bardziej luksusowych modeli samochodów\n" +
                    "- Długi okres spłaty oznacza, że całkowity koszt pożyczki może być znaczący ze względu na odsetki naliczane przez 5 lat\n" +
                    "- Wymóg przedstawienia zabezpieczenia (np. zastaw na finansowanym pojeździe) może być problematyczny dla niektórych pożyczkobiorców\n" +
                    "- Ryzyko nadmiernego zadłużenia dla osób o niestabilnej sytuacji finansowej\n" +
                    "\n" +
                    "# 3. Retirement Trust Fund\n" +
                    "\n" +
                    "## Długi opis\n" +
                    "Retirement Trust Fund to ekskluzywny produkt inwestycyjny zaprojektowany dla klientów o bardzo wysokim statusie majątkowym (Ultra High Net Worth), oferujący bezpieczne i stabilne rozwiązanie dla osób planujących emeryturę. Fundusz inwestuje w szeroko zdywersyfikowany portfel aktywów, mając na celu osiągnięcie oczekiwanej stopy zwrotu na poziomie 5,0% rocznie przy umiarkowanym poziomie ryzyka (4 na skali ryzyka).\n" +
                    "\n" +
                    "Minimalna kwota inwestycji wynosi 50 000,00 zł, co podkreśla ekskluzywny charakter tego produktu. Roczna opłata za zarządzanie jest ustalona na konkurencyjnym poziomie 0,8%, co zapewnia profesjonalne zarządzanie aktywami przez doświadczonych menedżerów portfela.\n" +
                    "\n" +
                    "Retirement Trust Fund jest idealnym rozwiązaniem dla zamożnych inwestorów, którzy cenią sobie bezpieczeństwo i stabilność w długoterminowym planowaniu emerytalnym. Fundusz oferuje zrównoważone podejście do inwestycji, łącząc potencjał wzrostu z ochroną kapitału.\n" +
                    "\n" +
                    "## Plusy\n" +
                    "- Atrakcyjna oczekiwana stopa zwrotu (5,0%) przy umiarkowanym poziomie ryzyka\n" +
                    "- Profesjonalne zarządzanie przez doświadczonych menedżerów portfela\n" +
                    "- Niskie opłaty za zarządzanie (0,8%) w porównaniu do podobnych produktów w segmencie premium\n" +
                    "- Zdywersyfikowany portfel inwestycyjny ograniczający ryzyko\n" +
                    "- Prestiżowy produkt dedykowany dla klientów o bardzo wysokim statusie majątkowym\n" +
                    "- Potencjalne korzyści podatkowe związane z inwestycjami emerytalnymi\n" +
                    "\n" +
                    "## Minusy\n" +
                    "- Wysoki próg wejścia (50 000,00 zł minimalna inwestycja) ogranicza dostępność dla szerszego grona inwestorów\n" +
                    "- Ograniczona płynność - środki są zazwyczaj zamrożone do czasu emerytury\n" +
                    "- Oczekiwana stopa zwrotu może nie być gwarantowana i może się zmieniać w zależności od warunków rynkowych\n" +
                    "- Poziom ryzyka (4) może być zbyt wysoki dla bardziej konserwatywnych inwestorów zbliżających się do emerytury\n" +
                    "- Potencjalne kary za wcześniejsze wycofanie środków" +
                    "UŻYTKOWNIKOWI MOŻESZ POLECAĆ TYLKO POWYZSZE OFERTY< BO TYLKO TAKEI BANK POSIADA< NIE MOZESZ WYMYSLAC SWOICH";

            List<Content> chatHistory = new ArrayList<>();
            Content initialContext = Content.newBuilder()
                    .setRole("user")
                    .addParts(Part.newBuilder().setText(context).build())
                    .build();
            chatHistory.add(initialContext);

            chatSession.setHistory(chatHistory);

            Scanner scanner = new Scanner(System.in);
            String userInput;

            System.out.println("Welcome to the chat! Type 'exit' to quit.");

            while (true) {
                userInput = scanner.nextLine();

                if (userInput.equalsIgnoreCase("exit")) {
                    System.out.println("Exiting chat. Goodbye!");
                    break;
                }


                Content userMessage = createContent("user", userInput);
//                chatHistory.add(userMessage);


                GenerateContentResponse response = chatSession.sendMessage(userMessage);
                String botResponse = ResponseHandler.getText(response);


                Content botMessage = createContent("model", botResponse);
                chatHistory.add(botMessage);

                System.out.println("Bot: " + botResponse);
            }

            scanner.close();
        }
    }

    private static Content createContent(String role, String text) {
        return Content.newBuilder()
                .setRole(role)
                .addParts(Part.newBuilder().setText(text).build())
                .build();
    }
}