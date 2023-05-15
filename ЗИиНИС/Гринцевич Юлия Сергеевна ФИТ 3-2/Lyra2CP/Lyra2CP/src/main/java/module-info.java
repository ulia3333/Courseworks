module com.example.lyra2cp {
    requires javafx.controls;
    requires javafx.fxml;


    opens com.example.lyra2cp to javafx.fxml;
    exports com.example.lyra2cp;
}