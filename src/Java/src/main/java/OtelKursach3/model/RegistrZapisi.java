package OtelKursach3.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import OtelKursach3.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: РегистрЗаписи
 */
@Entity(name = "IISOtelKursach3РегистрЗаписи")
@Table(schema = "public", name = "РегистрЗаписи")
public class RegistrZapisi {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодРегитсра")
    private Integer кодрегитсра;

    @Column(name = "ДатаЗаселения")
    private Date датазаселения;

    @Column(name = "ДатаВыезда")
    private Date датавыезда;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Dostup")
    @Convert("Dostup")
    @Column(name = "Доступ", length = 16, unique = true, nullable = false)
    private UUID _dostupid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Dostup", insertable = false, updatable = false)
    private Dostup dostup;


    public RegistrZapisi() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодРегитсра() {
      return кодрегитсра;
    }

    public void setКодРегитсра(Integer кодрегитсра) {
      this.кодрегитсра = кодрегитсра;
    }

    public Date getДатаЗаселения() {
      return датазаселения;
    }

    public void setДатаЗаселения(Date датазаселения) {
      this.датазаселения = датазаселения;
    }

    public Date getДатаВыезда() {
      return датавыезда;
    }

    public void setДатаВыезда(Date датавыезда) {
      this.датавыезда = датавыезда;
    }


}