import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

public class MyServiceTest {

    @Test
    public void testVerifyInteraction() {
   
        ExternalApi mockApi = mock(ExternalApi.class);

        MyService service = new MyService(mockApi);

        service.fetchData();

        verify(mockApi, times(1)).getData();
    }

    @Test
    public void testVerifyWithArguments() {
        
        ExternalApiWithArgs mockApi = mock(ExternalApiWithArgs.class);

        mockApi.getData("user123");

        verify(mockApi).getData("user123");
    }
}
