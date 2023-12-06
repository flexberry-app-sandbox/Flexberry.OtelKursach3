package OtelKursach3.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import OtelKursach3.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Комната
 */
@Entity(name = "IISOtelKursach3Комната")
@Table(schema = "public", name = "Комната")
public class Komnata {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодКомнаты")
    private Integer кодкомнаты;

    @Column(name = "Стоимость")
    private Integer стоимость;

    @Column(name = "Класс")
    private String класс;

    @Column(name = "КолвоМест")
    private String колвомест;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Otel")
    @Convert("Otel")
    @Column(name = "Отель", length = 16, unique = true, nullable = false)
    private UUID _otelid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Otel", insertable = false, updatable = false)
    private Otel otel;


    public Komnata() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодКомнаты() {
      return кодкомнаты;
    }

    public void setКодКомнаты(Integer кодкомнаты) {
      this.кодкомнаты = кодкомнаты;
    }

    public Integer getСтоимость() {
      return стоимость;
    }

    public void setСтоимость(Integer стоимость) {
      this.стоимость = стоимость;
    }

    public String getКласс() {
      return класс;
    }

    public void setКласс(String класс) {
      this.класс = класс;
    }

    public String getКолвоМест() {
      return колвомест;
    }

    public void setКолвоМест(String колвомест) {
      this.колвомест = колвомест;
    }


}