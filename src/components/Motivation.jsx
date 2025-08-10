import React from 'react';
import './Motivation.css';

export default function Motivation() {
  return (
    <section className="motivation">
      <div className="motivation__content">
        <div className="motivation__text">
          <h4 className="motivation__header">Летопись сокровищ: бухта Норман</h4>
          <h2 className="motivation__subheader">Станьте героем пиратской истории в стиле Pin-up!</h2>
          <p className="motivation__paragraph">
            На острове Норман всё не так просто. За каждой скалой может скрываться проход, а любая находка в стиле Pin-up —
            оказаться ключом к древнему заговору. Команда «Ориона» исследует побережье и затопленные бухты, стараясь понять
            истинное назначение загадочных артефактов. История развивается через подсказки и взаимодействие с находками.
            С каждым новым заданием атмосфера приключения в стиле Pin-up становится всё плотнее. Логика, внимание и командная работа —
            всё, что нужно, чтобы раскрыть тайны острова.
          </p>

          <strong className="motivation__intro">Вас ждёт:</strong>
          <ul className="motivation__list">
            <li>Сокровища и артефакты в стиле Pin-up: от сундуков до чеканенных монет — требуются внимание и логика.</li>
            <li>Захватывающие задания: каждая находка — новая история, а слаженность команды обязательна.</li>
            <li>Атмосфера старых легенд: о бухте Норман и прошлом острова — почувствуйте себя настоящим исследователем.</li>
          </ul>
        </div>

        <div className="motivation__image">
          <img src="/images/treasure06.jpg" alt="motivation" />
        </div>
      </div>
    </section>
  );
}
