import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class csv {
    public static void main(String[] args) {
        String csvFile = "ciudades.csv";
        List<List<String>> data = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(csvFile))) {
            String line;

            while ((line = br.readLine()) != null) {
                String[] values = line.split(";");
                List<String> lineData = Arrays.asList(values);

                data.add(lineData);
            }

           for (int i = 0; i < data.size(); i++) {
                List<String> row = data.get(i);
                System.out.println(i + ": " + String.join(", ", row));
            }  

        } catch (IOException e) {
            System.err.println("Error al leer : " + e.getMessage());
            e.printStackTrace();
        }
    }
}